const fs = require('fs')
const data = require('../../../data.json')

exports.layout = function(req, res){
    const items = {
        titlePage: 'Seja Bem Vindo',
        img: 'https://i.pinimg.com/originals/2c/36/e1/2c36e11bbcabb9c4192fb63f0fd4de1b.png',
        title: 'FAREMOS EM LARES CARENTES UM NATAL TODOS OS DIAS',
        button: 'Ir'
    }

    return res.render('layout', { layout: items } )
}

exports.page = function(req, res){
    const page = {
        imgPrimaria: '/images/1.png',
        titleImgPrimario: '"Faça uma criança sorrir, milhares de crianças estão esperando seu ato de amor"',
        img: [
            {
                img: '/images/1.png',
                title: '"Faça uma criança sorrir, milhares de crianças estão  esperando seu ato de amor"'
            },
            {
                img: '/images/2.jpg',
                title: '"O amor é como uma criança carente, precisa de respeito e atenção."'
            },
            {
                img: '/images/3.jpg',
                title: '"O amor é como uma criança sorridente, mas quando triste, fica carente, precisando de colo."'
            },
            {
                img: '/images/4.jpg',
                title: '"Não deixe que a criança que vive dentro de você morra!... Pois, é esse lado criança que todos nós temos que nos dá asas, nos faz sonhar e continuar acreditando que a vida é bela!"'
            },
            {
                img: '/images/5.jpeg',
                title: '"A maravilha de se amar uma criança, é vê-la crescer saudável, inteligente, bonita, carinhosa,estudiosa e acima de tudo, digna"'
            },
            
        ],
        p: 'Video',
        h1: 'inspiration',
        srcVideo: 'https://www.youtube.com/embed/Fb_Z-Ty1Eh4',
        cards: [
            {
                img: 'https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/about-512.png',
                title: 'Sobre'
            },
            {
                img: 'https://cdn.onlinewebfonts.com/svg/img_326891.png',
                title: 'Contato'
            },
            {
                img: 'https://i.pinimg.com/originals/9b/d9/a9/9bd9a91fa61e38b4254b94e6db9daac4.png',
                title: 'Cidade'
            },
            {
                img: 'https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-1/128/feedback-512.png',
                title: 'Depoimentos'
            },
        ]
    }

    return res.render('page', { page } )
}

exports.donors = function(req, res){
    return res.render('doadores', { donors: data.donors }) 
}

exports.form = function(req, res){
    return res.render('form')
}

exports.post = function(req, res){

    const keys = Object.keys(req.body)

    for ( key of keys ){
        if ( req.body[key] == '' ){
            return res.send('Por favor preencha corretamente todos os campos!')
        }
    }

    let {
        name,
        url,
        contact,
        date,
        address,
        lat,
        lng,
        message
    } = req.body

    date = Date.parse(date)

    let id = 1
    const lastDonors = data.donors[data.donors.length - 1]

    if (lastDonors){
        id = lastDonors.id + 1
    }
    
    data.donors.push({
        id,
        ... req.body,
        url,
        name,
        date,
        contact,
        address,
        lat,
        lng,
        message
    })
    
    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Write file error!')
    } )
    

    return res.redirect(`/doadores`)
}

