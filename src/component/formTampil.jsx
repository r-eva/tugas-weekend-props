import React from 'react'
import SubmitTampil from './submitTampil'

class formTampil extends React.Component {

    state = {
        nama: [
            'Seto', 'Andi', 'Budi'
        ],
        pekerjaan: [
            'Coder', 'CEO', 'Manager'
        ],
        lahir: ['01/02/03', '04/05/06', '07/08/09']
    }

    tambahData = () => {
        var inputNama = this.refs.nama.value
        var inputJob = this.refs.pekerjaan.value
        var inputdate = this.refs.lahir.value

        var newNama = this.state.nama
        newNama.push(inputNama)
        this.setState({nama: newNama})

        var newJob = this.state.pekerjaan
        newJob.push(inputJob)
        this.setState({pekerjaan: newJob})

        var newDate = this.state.lahir
        newDate.push(inputdate)
        this.setState({lahir: newDate})
    }

    render() {
        return (
            <div className="container justify-content-center">
                <div className="row mt-3 justify-content-center">
                    <div className="col-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan nama Anda"
                            ref='nama'/>
                    </div>
                    <div className="col-4">
                        <input
                            type="button"
                            className="btn btn-info btn-block"
                            value="SUBMIT"
                            onClick={this.tambahData}/>
                    </div>
                </div>
                <div className="row mt-2 justify-content-center">
                    <div className="col-8">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan pekerjaan Anda"
                            ref='pekerjaan'/>
                    </div>
                </div>
                <div className="row mt-2 justify-content-center">
                    <div className="col-8">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan tanggal lahir dengan format DD/MM/YY"
                            ref='lahir'/>
                    </div>
                </div>
                <div>
                    <SubmitTampil
                        nama={this.state.nama}
                        pekerjaan={this.state.pekerjaan}
                        lahir={this.state.lahir}/>
                </div>
            </div>
        )
    }
}

export default formTampil