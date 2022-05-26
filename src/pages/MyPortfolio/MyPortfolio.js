import React from 'react';
import { toast } from 'react-toastify';

const MyPortfolio = () => {
    const handleWishButton = () => {
        toast.success("Thank You So Much !!!")
    }
    return (
        <div className="card w-2/3 mx-auto bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">About Me</h2>
                <p>Name: Md. Saif Anwar</p>
                <p>Email: saifanwar5123@gmail.com</p>
                <p>Education: Bachelor of business administration, North South University</p>
                <h2 className="card-title">Skills</h2>
                <p>Expertise: JavaScript, React.js, Express js, Tailwind, Bootstrap, HTML & CSS, MongoDB <br />
                    Comfortable:  Figma, Adobe Photoshop, React Query, React Animation <br />
                    Familiar: Material UI, PHP <br />
                    Tools: Git, VS Code, Chrome Dev Tools, Heroku, Firebase
                </p>
                <h2 className="card-title">Projects</h2>
                <p>Cycle Hunt: <a href='https://bicycle-parts.web.app/' className="link link-secondary">https://bicycle-parts.web.app/</a></p>
                <p>Computer Store:  <a href='https://inventory-a416f.web.app/' className="link link-secondary">https://inventory-a416f.web.app/</a></p>
                <p>Travel Bangladesh: <a href='https://lovely-choux-13e9e6.netlify.app/' className="link link-secondary">https://lovely-choux-13e9e6.netlify.app/</a></p>
                <div className="card-actions justify-center py-2">
                    <button onClick={handleWishButton} className="btn btn-primary">Wish you all the best</button>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;