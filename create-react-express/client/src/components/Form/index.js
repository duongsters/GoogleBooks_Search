import React from 'react';


function Form(props) {
    return (
        <div className="container" style={{textAlign: 'center'}} >
        <div id='search-form' className='text-center'>
            <input className='form-control' name='title'
                placeholder='Search for a book...'
                type='text'
                style={{ width: 300, textAlign:'center' }}
                onChange={props.handleInputChange}></input>
                <br />
                <button
                className='btn btn-block btn-primary'
                    onClick={props.handleFormSubmit}
                    type='submit'
                >Search
            </button>
        </div>
        </div>
    )
}

export default Form