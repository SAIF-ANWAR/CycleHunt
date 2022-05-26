import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import PrimaryButton from '../Shared/PrimaryButton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const { data: product, isLoading, refetch } = useQuery('available', () => fetch(`https://fathomless-brushlands-38249.herokuapp.com/parts/${id}`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleOrder = event => {
        event.preventDefault()
        const productName = event.target.product?.value
        const buyer = event.target.buyer?.value
        const email = event.target.email?.value
        const currentQuantity = event.target.quantity?.value
        const address = event.target.address?.value
        const totalQuantity = product.quantity
        const orderedQuantity = parseFloat(currentQuantity)
        const quantity = totalQuantity - orderedQuantity
        const image = product?.img
        const phone = event.target?.phone.value
        const data = {
            productName, buyer, email, orderedQuantity, address, image, phone
        }
        console.log(data)
        const url = `https://fathomless-brushlands-38249.herokuapp.com/orders`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (currentQuantity < product?.minOrder) {
                    toast.error(`Minimum order quantity is ${product?.minOrder}`)
                }
                else if (currentQuantity > product?.quantity) {
                    toast.error(`Order quantity should be less than available quantity ${product?.quantity}`)
                }

                else {
                    const url = `https://fathomless-brushlands-38249.herokuapp.com/parts/${id}`
                    fetch(url, {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ quantity })
                    })
                        .then(res => res.json())
                        .then(data => {
                            refetch()
                            if (data.acknowledged === true) {
                                toast.success("Order Placed Successfully")
                            }
                        })

                }

            })
        event.target.reset()
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-2/3 flex-col lg:flex-row-reverse justify-items-center">
                    <div className="text-center lg:text-left p-3">
                        <img className='max-h-64 mb-8' src={product?.img} alt="" />
                        <p>Available Quantity: {product?.quantity <= 0 ? "Stock Out" : product?.quantity}</p>
                        <p>Price: $ {product?.price}</p>
                        <p>Shipping Cost: $ 20</p>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">

                        <div>
                            <form onSubmit={handleOrder}>
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name of the Product</span>
                                        </label>
                                        <input type="text" value={product?.name} name="product" className="input input-bordered" readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input type="text" value={user?.displayName} name="buyer" placeholder="Your Name" className="input input-bordered" readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Email</span>
                                        </label>
                                        <input type="email" value={user?.email} name="email" placeholder="Your Name" className="input input-bordered" readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone Number</span>
                                        </label>
                                        <input type="number" name="phone" placeholder="phone number" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Quantity <small>( MOQ : 20 )</small></span>
                                        </label>
                                        <input type="number" defaultValue="20" name="quantity" placeholder="Your Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Shipping Address</span>
                                        </label>
                                        <input type="text" name="address" placeholder="Address" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-5">
                                        <PrimaryButton >Order</PrimaryButton>
                                    </div>
                                    <ToastContainer />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;