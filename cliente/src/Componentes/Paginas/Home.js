import React, { Component } from 'react';
import EstilosDash from '../Comun/dashboard.module.css';



export default class Home extends Component {

    render() {

        return (
            <div className="container homepage animate__animated animate__fadeIn" >
                <div className={EstilosDash.base1} >
                    <div className={EstilosDash.titulo}>
                        Situacion equipos.
                     </div>
                    <div className={EstilosDash.base1r} >
                        <div className={EstilosDash.datos}>
                            <p className={EstilosDash.papeq}>Base de datos: <n>Ok</n></p>
                            <p className={EstilosDash.papeq}>Sistema web: <n>Ok</n></p>
                            <p className={EstilosDash.papeq}>Usuarios activos: <n>2</n></p>
                        </div>
                    </div>
                </div>

                <div className={EstilosDash.base2} >
                    <div className={EstilosDash.titulo2}>
                        Clientes.
                     </div>
                    <div className={EstilosDash.base1r} >
                        <div className={EstilosDash.datos}>
                            <table>
                                <tr>
                                    <th className={EstilosDash.grTitulo}>Total</th>
                                    <th className={EstilosDash.grTitulo}>Nuevos</th>
                                    <th className={EstilosDash.grTitulo}>Activos</th>
                                </tr>
                                <tr>
                                    <td className={EstilosDash.grNumero}>630</td>
                                    <td className={EstilosDash.grNumero}>50</td>
                                    <td className={EstilosDash.grNumero}>62</td></tr>
                            </table>

                        </div>
                    </div>
                </div>

                <div className={EstilosDash.base3} >
                <div className={EstilosDash.titulo3}>
                   Operaciones dia.
                 </div>
                <div className={EstilosDash.base1r} >
                    <div className={EstilosDash.datos}>
                        <p className={EstilosDash.paqr}>Compras: <n>25</n></p>
                        <p className={EstilosDash.paqr}>Pedidos: <n>50</n></p>
                        <p className={EstilosDash.paqr}>Importe max: <n>20</n></p>
                        <p className={EstilosDash.paqr}>Importe min: <n>12</n></p>
                        <p className={EstilosDash.paqr}>Importe total: <n>530</n></p>
                    </div>
                </div>
            </div>

            </div >

        )
    }
}