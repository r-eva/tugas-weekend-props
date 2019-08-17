import React from 'react'

const Submit = (props) => {

    const {nama, pekerjaan, lahir} = props
    const arrTampil = []


    const tampilAwal = () => {
        for (var i =  0; i < nama.length; i++) {
            arrTampil[i] = [nama[i], pekerjaan[i], lahir[i]]
        }
        
        var jsx = arrTampil.map((val) => {
            return <div className="col-3 border mt-3 mr-2 ml-2">
                    <p>Name: {val[0]}</p>
                    <p>Job: {val[1]}</p>
                    <p>Date of Birth: {val[2]}</p>
                    </div>
        })
        return jsx
    }

    return (
        <div className='container'>
            <div className="row justify-content-center">
                {tampilAwal()}
            </div>
        </div>
    )
}

export default Submit