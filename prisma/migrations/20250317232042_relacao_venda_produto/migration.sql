-- AddForeignKey
ALTER TABLE `vendasProdutos` ADD CONSTRAINT `vendasProdutos_id_venda_fkey` FOREIGN KEY (`id_venda`) REFERENCES `vendas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
