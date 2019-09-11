import React, { Component } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/box.png'
import icon from '../../assets/icon.png'


export default class Main extends Component {
  constructor(props) {
    super(props)
    this.counter = 1
  }
  state = {
    active: false
  };



  letStart = () => {
    this.props.history.push('/create')
  }

  openMenu = () => {
    if (this.counter == 1) {
      this.setState({ active: true })
      this.counter = 0;
      console.log(this.counter)
    } else {
      this.setState({ active: false })
      this.counter = 1;
      console.log(this.counter)
    }

  }


  // navbar-collapse main-menu collapse show
  // className="collapse navbar-collapse main-menu"

  render() {
    return (
      <body>
        <header className="header-area clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <a className="navbar-brand" href="#"></a>
                <nav className="navbar navbar-expand-md navbar-dark">
                  <button onClick={this.openMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <h1 className="brand">dropWallet.</h1>
                  <div className={`${this.state.active !== true ?
                    'collapse navbar-collapse main-menu' :
                    'navbar-collapse main-menu collapse show'}`} id="collapsibleNavbar">
                    <ul>
                      <li>
                        <a className="nav-link" href="#about">Sobre</a>
                      </li>
                      <li>
                        <a className="nav-link" href="#how_works">Como Funciona</a>
                      </li>
                      <li>
                        <a className="nav-link" href="#start">Comece a usar</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>


        <section className="banner-area text-right clearfix">
          <div className="container position-relative">
            <div className="row">
            <div className="col-lg-4">
                <img src={logo} alt=""/>
              </div>
              <div className="col-lg-8">
                <h1>Uma facilidade<br /> próxima de você</h1>
              </div>
            </div>
          </div>
          <div className="overlay"></div>
        </section>

        <section className="about clearfix" id="about">
          <div className="container">
            <div className="row clearfix">
              <div className="col-lg-12">
                <div className="col-lg-12">
                  <h3 className="heading">Sobre</h3>
                  <div className="cu-border"></div>
                  <div className="margin-40 clearfix"></div>
                  <p className="justify">Olá! Essa aplicaçāo irá te ajudar a nunca mais perder aquele boleto, ou extrato financeiro tāo importante, aqui você sempre vai poder compartilhar seus documentos de maneira rápida e prática!</p>
                </div>
                <span className="justify">
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-work text-center clearfix" id="how_works">
          <div className="container">
            <div className="row clearfix">
              <div className="col-lg-12">
                <h2 className="heading">Como Funciona</h2>
                <div className="cu-border"></div>
                <div className="margin-40 clearfix"></div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="single-how-work clearfix">
                  <div className="icon clearfix">
                    <img src={icon} alt="" />
                  </div>
                  <div className="how-work-text clearfix">
                    <h3>PASSO 1</h3>
                    <p>Crie sua box para uploads, de um nome legal, que faça juz aos seus material</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="single-how-work clearfix">
                  <div className="icon clearfix">
                    <img src={icon} alt="" />
                  </div>
                  <div className="how-work-text clearfix">
                    <h3>PASSO 2</h3>
                    <p>Faça o upload de suas imagens ou arquivos.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="single-how-work clearfix">
                  <div className="icon clearfix">
                    <img src={icon} alt="" />
                  </div>
                  <div className="how-work-text clearfix">
                    <h3>PASSO 3</h3>
                    <p>As pessoas que estiverem na mesma box que você podem também visualizar ou enviar arquivos em tempo real.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="single-how-work clearfix">
                  <div className="icon clearfix">
                    <img src={icon} alt="" />
                  </div>
                  <div className="how-work-text clearfix">
                    <h3>PASSO 4</h3>
                    <p>Acompanhe em real time a quantidade de arquivos upados na sua box via gráfico.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="start-use clearfix" id="start">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                <h1 className="join-us">Aproveite já!</h1>

              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-center flex-itens">
                <button onClick={this.letStart} className="start-button"> Comece a usar </button>
              </div>
            </div>
          </div>
        </section>
      </body>

    );
  }
}
