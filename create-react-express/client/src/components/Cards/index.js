import React from "react";
import Button from "../Button";




function Cards({ title, link, id, author, image, description, saveBook, deleteBook }) {
    if (!saveBook) {
        return (
            <div id='result-card'>
                <div className='row text-center' id='result-header'>
                    <div className='col-3'>
                        <h4>{title}</h4>
                        <small>Author:{author}</small>
                    </div>
                    <span className='col-3 offset-6'>
                        <Button
                            href={link}
                        >View
                        </Button>
                        <Button
                            id={id}
                            onClick={(event) => deleteBook(event)}
                        >Delete
                        </Button>
                    </span>
                </div>
                <div className='row'>
                    {/* <hr /> */}
                </div>
                <div className='row'>
                    <div className='col-3 text-center'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='col-9'>
                        <p className='lead'>Summary: </p>
                        {description}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div id='result-card'>
                <div className='row text-center' id='result-header'>
                    <div className='col-3'>
                        <hr />
                        <h4>{title}</h4>
                        <small>
                            Author:{author}</small>
                    </div>
                    <span className='col-3 offset-6'>
                        <Button
                            href={link}
                        >View Book
                        </Button>
                        <Button
                            id={id}
                            onClick={(event) => saveBook(event)}
                        >Save Book
                        </Button>
                    </span>
                </div>
                <div className='row'>
                    {/* <hr /> */}
                </div>
                <div className='row'>
                    <div className='col-3 text-center'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='col-9'>
                        <p className='lead'>Summary: </p>
                        {description}
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Cards;