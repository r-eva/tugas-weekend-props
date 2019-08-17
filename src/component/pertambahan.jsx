import React from 'react'

class Pertambahan extends React.Component {
    state = {
        counterSatu: 0,
        counterDua: 0,
        counterTiga: 0
    }

    decrement = () => {
        this.setState({counterSatu: this.state.counterSatu +1})
        this.setState({counterDua: this.state.counterDua +1})
        this.setState({counterTiga: this.state.counterTiga +1})
    }

    increment = () => {
        this.setState({counterSatu: this.state.counterSatu -1})
        this.setState({counterDua: this.state.counterDua -1})
        this.setState({counterTiga: this.state.counterTiga -1})
    }

    render() {
        return (
            <div className="border p-3 mt-3">
                <div className="row p-3">
                    <div className="col-4 justify-content-md-center">
                        <div className="row">
                            <div className="col col-lg-3">
                                <input type="button" className="btn btn-primary btn-block btn-lg" value='+' onClick={() => this.setState({counterSatu: this.state.counterSatu +1})}/>
                            </div>
                            <div className="col-6">
                                <div className="row justify-content-center">
                                    <h6>{this.state.counterSatu}</h6>
                                </div>
                                <div className="row justify-content-center">
                                    <h6>Counter 1</h6>
                                </div>
                            </div>
                            <div className="col col-lg-3">
                                <input type="button" className="btn btn-primary btn-block btn-lg" value='-' onClick={() => this.setState({counterSatu: this.state.counterSatu -1})}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col col-lg-3">
                                <input type="button" className="btn btn-secondary btn-block btn-lg" value='+' onClick={() => this.setState({counterDua: this.state.counterDua +1})}/>
                            </div>
                            <div className="col-6">
                                <div className="row justify-content-center">
                                    <h6>{this.state.counterDua}</h6>
                                </div>
                                <div className="row justify-content-center">
                                    <h6>Counter 2</h6>
                                </div>
                            </div>
                            <div className="col col-lg-3">
                            <input type="button" className="btn btn-primary btn-block btn-lg" value='-' onClick={() => this.setState({counterDua: this.state.counterDua -1})}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col col-lg-3">
                            <input type="button" className="btn btn-secondary btn-block btn-lg" value='+' onClick={() => this.setState({counterTiga: this.state.counterTiga +1})}/>
                            </div>
                            <div className="col-6">
                                <div className="row justify-content-center">
                                    <h6>{this.state.counterTiga}</h6>
                                </div>
                                <div className="row justify-content-center">
                                    <h6>Counter 3</h6>
                                </div>
                            </div>
                            <div className="col col-lg-3">
                            <input type="button" className="btn btn-primary btn-block btn-lg" value='-' onClick={() => this.setState({counterTiga: this.state.counterTiga -1})}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                    <input type="button" className="btn btn-secondary btn-block btn-lg" value="Decrement All" onClick={this.decrement}/>
                    </div>
                    <div className="col-6">
                    <input type="button" className="btn btn-secondary btn-block btn-lg" value="Increment All" onClick={this.increment}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Pertambahan