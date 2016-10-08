/****************************************************************************
* Servicio : Api de mercado pago                                            *
*																							                              *
* referencia : https://www.npmjs.com/package/nodemailer 				           	*
*****************************************************************************/

module.exports = {
  credenciales: {
    CLIENT_ID: 649853968332418,
    CLIENT_SECRET: "sht1NJ3JS9QprKruNMBTY8unVp9i9nUQ"
  },

// Token de Acceso
  token : function () {
    mp.getAccessToken(function (err, accessToken){
      if (err) {
          console.log (err);
          //return ();
      } else {
          console.log (accessToken);
          accessToken;
      };
    });
  },

// Crear Nuevo cliente
  nuevoCliente : function () {

    var MP = require("mercadopago");
    var mp = new MP ("649853968332418", "sht1NJ3JS9QprKruNMBTY8unVp9i9nUQ");
    var datos = {
      "uri": "/v1/customers",
      "data": {
          "email": "email@test.com"
      }
    };
    mp.post (datos)
    .then (
      function () {

      },
      function () {

    });
  },

}
