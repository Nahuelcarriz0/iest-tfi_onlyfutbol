# Datos - Only Fútbol

## Ejemplo de catálogo en Supabase

### Tablas
```sql
create table categorias (
  id bigint generated always as identity primary key,
  nombre varchar(100) not null unique
);

create table productos (
  id bigint generated always as identity primary key,
  nombre varchar(150) not null,
  descripcion text,
  imagen_url text not null,
  categoria_id bigint not null references categorias (id)
);
```

### Datos de ejemplo
```sql
insert into categorias (nombre) values
  ('Clubes argentinos'),
  ('Selecciones'),
  ('Clubes internacionales'),
  ('Retro'),
  ('Otros productos');

insert into productos (nombre, descripcion, imagen_url, categoria_id) values
  ('Camiseta de Boca Juniors', 'Camiseta de club del fútbol argentino.', 'assets/img/CLUBARG-BOCA.webp', 1),
  ('Camiseta de la Selección Argentina', 'Camiseta de selección nacional.', 'assets/img/SELECCION-ARGENTINA.webp', 2),
  ('Camiseta del Arsenal', 'Camiseta de club del fútbol internacional.', 'assets/img/CLUBESINTER-ARSENAL.webp', 3),
  ('Camiseta retro de Argentina 1994', 'Camiseta retro inspirada en un modelo clásico.', 'assets/img/RETRO-ARGENTINA94.webp', 4);
```

### Resultado de una consulta
```json
{
  "id": 1,
  "nombre": "Camiseta de Boca Juniors",
  "descripcion": "Camiseta de club del fútbol argentino.",
  "imagen_url": "assets/img/CLUBARG-BOCA.webp",
  "categoria_id": 1
}
```
