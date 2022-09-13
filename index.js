(async() =>
{
    const database = require('/bd');
    const produto = require('/produto');

    await database.sync();

    await produto.create(
        {
         nome:"primmeiro teste",
         DataCriacao: Date()
        }

    )
    await produto.create(
        {
         nome:"segundo teste",
         DataCriacao: Date()
        }

    )
    await produto.create(
        {
         nome:"terceiro teste",
         DataCriacao: Date()
        }

    )
    const alterProd = await produto.findByPK(2);
    alterProd.nome = "arquivo 2 alterado";
    await alterProd.save();
    produto.destroy({where : {id: 1} });
    const findProd = await produto.findByPK(3);
    console.log(findProd);

    const findAllProd = await produto.findAll();
    console.log(findAllProd);


})();