import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputComponent } from '../../Fragmentos/InputComponent';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";
import { withStyles } from "@material-ui/core/styles";
import { checkUsuario } from './../../../Servicios/funcionesSeguridad';

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};


class FormularioUsers extends Component {

    render() {
        const { classes } = this.props;
        let user = this.props.obj;
        let readonly = this.props.orden.includes(['D', 'V']) ? true : false
        let modificar = this.props.funcion;
        let { userid, userName }= user

        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={8}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Gestion Usuarios</h4>
                                <p className={classes.cardCategoryWhite}>Indique los datos del checkUsuario</p>
                            </CardHeader>
                            <CardBody>
                                {
                                    (user.userid) ?
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={5}>
                                                <CustomInput
                                                    labelText="Id"
                                                    id="userid"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        disabled: true,
                                                        handleChange: { modificar },
                                                        value: { userid }
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer> : null

                                }
                                <GridItem xs={12} sm={12} md={3}>
                                    <CustomInput
                                        labelText="Nombre"
                                        id="userName"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            disabled: true,
                                            handleChange: { modificar },
                                            readOnly: { readonly },
                                            value: {userName }
                                        }}
                                    />
                                </GridItem>
                                

                                <InputComponent name="mail"
                                    handleChange={this.props.funcion}
                                    label="Correo electrónico"
                                    readOnly={readonly}
                                    value={user.mail}
                                />
                                {
                                    (user.password) ?
                                        <InputComponent name="password"
                                            handleChange={this.props.funcion}
                                            label="Contraseña"
                                            readOnly={readonly}
                                        /> : null
                                }
                                <InputComponent name="userPhone"
                                    handleChange={this.props.funcion}
                                    label="teléfono"
                                    readOnly={readonly}
                                    value={user.userPhone}
                                />
                                <InputComponent name="birthdate"
                                    handleChange={this.props.funcion}
                                    label="Fecha de nacimiento"
                                    readOnly={readonly}
                                    value={user.birthdate}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>

        )
    }
}

FormularioUsers.propTypes = {
    orden: PropTypes.oneOf(['D', 'V', 'E', 'I']).isRequired,
    obj: PropTypes.object,
    funcion: PropTypes.func,
    classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(FormularioUsers)