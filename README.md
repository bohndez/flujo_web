Flujo WEB
=====================

Para trabajar con gulp más rápido.
Estructura de carpetas típicas.


Uso
---------------------
- 1- Instala nodeJS

- 2- Instala gulp de forma local o global.

```sh
$ sudo npm install --global gulp
```

 NOTA: si estás en mac o linux puedes necesitar anteponer sudo:

- 3- Abre una terminal o CMD en la carpeta de tu proyecto.

- 4- En en la terminal que abriste ejecuta el comando: 

```sh
$ sudo npm install
```

Éste comando instala los módulos necesarios para que funcione gulp.

- 5- Para que comience a funcionar ejecuta gulp con el comando: "gulp".
Listo.

```sh
$ gulp
```

Si usas chrome o firefox pudes añadirle el complemento livereload a tu navegador. Este flujo está configurado para poder usarlo.

- [liveReload](http://livereload.com/)
- [Complemento para Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
- [Complemento para Firefox](https://addons.mozilla.org/es/firefox/addon/livereload/)


Carpeta src
---------------------
La carpeta de trabajo.
Acá van todos los archivos fuente que gulp compilará y los dejará minificados en dist.


Carpeta dist
---------------------
Carpeta que contiene el sitio que será subido al servidor. Acá van todos los archivos necesarios para que funcione.


Licencia
---------------------
MIT


Boris Hernández.
[cajonarium.cl](http://www.cajonarium.cl/)