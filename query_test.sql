-- No 1.
create table t_transaction_mst (
  id int not null auto_increment,
  tanggal_order datetime ,
  status_pelunasan varchar(10),
  tanggal_pembayaran datetime,
  primary key (id)
);

insert into t_transaction_mst (tanggal_order,status_pelunasan,tanggal_pembayaran) values ('2020-12-01 11:30:00','lunas','2020-12-01 12:00:00');
insert into t_transaction_mst (tanggal_order,status_pelunasan) values ('2020-12-01 10:30:00','pending');

-- no 2
create table t_transaction_dtl (
  id int not null auto_increment,
  id_transaksi int not null,
  harga int,
  jumlah int,
  subtotal int,
  primary key (id,id_transaksi)
);

insert into t_transaction_dtl (id_transaksi,harga,jumlah,subtotal) values (1,10000,2,20000);
insert into t_transaction_dtl (id_transaksi,harga,jumlah,subtotal) values (2,6250,4,25000);

-- no 3
select a.id,a.tanggal_order,a.status_pelunasan status,a.tanggal_pembayaran,b.subtotal,b.jumlah jumlah_barang
from t_transaction_mst a
inner join t_transaction_dtl b
on a.id = b.id_transaksi



