
var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name:  `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp:  '21987565652',
            address: {
                postalcode: '24020006',
                street: 'Avenida Visconde do Rio Branco',
                number: '755',
                details: 'Apt 301',
                district: 'Centro',
                city_state:  'Niterói/RJ'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}