const dados ={
    nome: 'Hélio',
    idade: 27,
    estado: 'Piauí',
}
console.log(dados)

dados.comidaFavorita = 'Lasanha'
console.log(dados)

delete dados.estado
console.log(dados)

console.log(dados)

const cadastro =[{
    nome: 'Julia',
    idade: 30,
    telefone: 8699978-4528,
    amigos: ['Lana', 'Guilherme', 'Joana', 'Silvia'] 
},
{
    nome: 'André',
    idade: 50,
    telefone: 8599958-3025,
    amigos: ['Maria', 'Jailson', 'Ester', 'Sarah']
},
{
    nome: 'Luan',
    idade: 19,
    telefone: 1199578-6847,
    amigos: ['Gal', 'Augusto', 'Helena', 'Ana']
},
{
    nome: 'Mauê',
    idade: 35,
    telefone: 3199985-7344,
    amigos: ['Mel', 'Lucas', 'Fábio', 'Alice']
},
{
    nome: 'Silmário',
    idade: 40,
    telefone: 2199987-3584,
    amigos: ['Mauricio', 'Regina', 'Marcelo', 'Luca']
}
]

console.log(cadastro[0].amigos[2])
console.log(cadastro[1].amigos[3])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[1])
console.log(cadastro[4].amigos[3])