import React, { Component } from 'react';
import api from '../../services/api';
import { MdInsertDriveFile } from 'react-icons/md';
import logo from '../../assets/box.png'
import Dropzone from 'react-dropzone';
import socket from 'socket.io-client';
import { Line } from 'react-chartjs-2';
import './styles.css'

    const dados = {
        labels: ['Agora'],
        datasets: [
            {
                label: 'Arquivos enviados agora',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#000',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                data: [0]
            }
        ]
    }

export default class Box extends Component {

    constructor(props) {
        super(props)
       
        this.state = { box: {}, chartData: {} }
    }


    
    async componentDidMount() {

        this.subscribeToNewFiles();

        const box = this.props.match.params.id;
        const response = await api.get(`boxes/${box}`);

        this.setState({ box: response.data })
        this.setState({ chartData: dados})
    }

    subscribeToNewFiles = () => {
        const box = this.props.match.params.id;
        const io = socket("https://omnistackgabriela-backend.herokuapp.com");

        io.emit("connectionRoom", box);

        io.on("file", data => {

            const datasetsCopy = this.state.chartData.datasets.slice(0);
            const dataCopy = datasetsCopy[0].data.slice(0);
            dataCopy[0] = dataCopy[0] + 1;
            datasetsCopy[0].data = dataCopy;

            this.setState({
                chartData: Object.assign({}, this.state.chartData, {
                    datasets: datasetsCopy
                })
            });

            this.setState({ box: { ... this.state.box, files: [data, ... this.state.box.files] } })
        });
    }

    handleUpload = files => {

        files.forEach(file => {

            const data = new FormData();
            const box = this.props.match.params.id;

            data.append('file', file);

            api.post(`boxes/${box}/files`, data)
        })

    }


    render() {
        return (
            <>
                <this.ShowList></this.ShowList>
                <this.chart></this.chart>
            </>

        );
    }

    chart = () => {
        return (
            <div className="chart">
                <Line data={this.state.chartData} redraw
                    width="950" height="200" 
                    onChange={this.changeHandler}/>
            </div>
        )
    }

    changeHandler(value) {
        this.state.chartData.update();
    }

    ShowList = () => {

        return (
            <div id="box-container">
                <header>
                    <img src={logo} alt="" />
                    <h1>{this.state.box.title}</h1>
                </header>

                <Dropzone onDropAccepted={this.handleUpload}>
                    {({ getRootProps, getInputProps }) => (
                        <div className="upload" {...getRootProps()}>
                            <input {...getInputProps()} />

                            <p>Arraste arquivos ou clique aqui</p>
                        </div>
                    )}
                </Dropzone>

                <ul>
                    {this.state.box.files && this.state.box.files.map(file => (
                        <li key={file._id}>
                            <a className="fileInfo" href={file.url} target="_blank">
                                <MdInsertDriveFile size={24} color="#A5CFF" />
                                <strong>{file.title}</strong>
                            </a>


                        </li>
                    ))}
                </ul>
            </div>

        );
    }
}
