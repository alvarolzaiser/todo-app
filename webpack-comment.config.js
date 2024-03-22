const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin"); // el "require" es una manera que tiene "node" para cargar estos archivos o módulos. Es decir, estoy requiriendo ese paquete o módulo "html-webpack-plugin", previamente instalado mediante "npm" o node package manager. Lo que hago ahora es requerir ese paquete o modulo de node previamente instalado. Y, como en el fondo, webpack se está ejecutando en "node" y, "node" reconoce ese comando de "require", entonces no vamos a tener ningún error.
// Estamos definiendo una constante que es igual a ese paquete o plugin, para que luego, donde querramos ejecutar o poner ese paquete o plugin, simplemente tengamos que llamar o hacer referencia a la constante. 

module.exports = {
    entry: './src/index.js', // el archivo que va a tomar como punto de entrada o inicio
    output: { // acá definimos el ouput o archivo de salida que va a contener todos los demás archivos "js" unificados que estemos trabajando de manera "modular" mediante "imports" y todo lo que se necesita para "producción", en el directorio "dist"
        filename: 'main.js', // este es nombre que va a llevar el archivo que unifique todos nuestros archivos js que estemos trabajando de manera separada y modular, en el directorio "dist"
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/, // Esta es una expresión regular. Y basicamente le estamos diciendo a webpack que las "rules" se van a aplicar si el archivo cumple la expresión regular, la cual es que el archivo sea ".html". Una expresión regular me permite buscar coincidencias de lo que yo sea que especifique dentro de la misma expresión como un string (en este caso, especifique ".html$", por ende, va a buscar una coincidencia o un archivo con esa extensión). Esto que escribrimos dentro de "test", le dice a webpack que aplique todo lo que está dentro de "rules" si es un archivo con extensión ".html". Le dice a webpack que aplique las "rules" si la extensión del archivo es ".html"
                
                // Aqui especificamos lo que se va a realizar en caso de encontrar una coincidencia o un archivo ".html" que es lo que le indicamos que busque a la expresión regular.
                use: [
                    {
                        loader: 'html-loader',

                        // En caso que querramos que nuestro index o main, los cuales tienen todos nuestros archivos js y html vinculados, centralizados y unificados, estén simplificados (o minimizados) cuando webpack los exporte en la carpeta "dist", lo que tenemos que hacer es lo siguiente:
                        options: {
                            minimize: true,
                        }
                    }
                ]
            },
// Carga de archivos css de manera dinámica + todos los beneficios de webpack... trabajar en un archivo sin minificaciones, con comentarios y demás, a la vez que te exporta o te genera en la carpeta "dist" un archivo con todo ese mismo código minificado para "distribución", también permite empaquetar o unificar y vincular el codigo que se trabaja de manera separada o modular en quizás 20 archivos distintos, te lo empaqueta, unifica y vincula todo en quizás 2 o 3 archivos para distribución, los cuales están todos vinculados y minificados, entre otros beneficios de webpack
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }), // basicamente le estamos diciendo que cree una nueva instancia de la constante que está almacenando la ejecución o "require" del paquete o plugin, por ende, haciendo referencia a dicha constante, estamos ejecutando el "require" a ese paquete o plugin. 
        // Dentro de "plugins" especificamos los plugins o paquetes que queremos instalar o importar. Y luego, lo que pongamos dentro de cada plugin, por ejemplo, dentro del plugin "HtmlWebPackPlugin" corresponde a la configuracion de ese plugin, o, es el proceso de configuración de ese plugin, en este caso, el plugin "HtmlWebPackPlugin" solamente tiene dos opciones a configurar el "template" y el "filename"........................... Entonces, lo que estamos haciendo es la configuración del plugin "HtmlWebPackPlugin" que acabamos de importar; mediante la configuración "template" le decimos a webpack qué o cuál es el archivo que quiero tomar(en este caso, el archivo que tomamos es: "./src/index.html"), y luego, mediante la configuracion "filename" le decimos a webpack hacia donde queremos llevar o colocar ese archivo que tomamos mediante "template" (en este caso, lo colocamos en: "./index.html")
        // Lo que se hace acá es decir que agarre el "index.html" que está dentro del directorio "src", que tome ese archivo como plantilla o ejemplo para crear otro archivo html igual, pero le suma a ese archivo html la importación del archivo js que exporta o es el output de webpack (el cual contiene todos nuestros archivos js vinculados, centralizados y unificados), el cual unfica todos nuestros archivos js que trabajamos de manera separada o modular y mediante "imports", agarra ese archivo que exporta o el "output" de webpack y lo importa en el documento html que tiene como plantilla (el cual es el index.html del directorio o carpeta "src") y crea un index.html igual al que está en el directorio "src", pero en el directorio "dist", con la unica diferencia de que el que está en el directorio "dist" tiene la importación de ese script que utiliza y exporta webpack para unificar, centralizar y vincular todos nuestros archivos js. De esa manera, todo lo que se cree en mi index del directorio "src", y, así cree nuevos archivos javascript que no están referenciados o importados en el index de la carpeta "src", todo está centralizado en el js y html que exporta webpack en la carpeta "dist". Por más que yo tenga 10 archivos js, todo se centraliza y unifica en el archivo "main.js" de la carpeta "dist", dicho archivo es el output que vincula todos esos archivos js, los unifica y centraliza. Y por más que en el archivo html que yo estoy trabajando no hice ninguna referencia al archivo u output "main.js" que exporta webpack, el cual tiene todos mis archivos js de manera unificada, centralizada, vinculada, minimizada, lo que sucede es que webpack agarra como plantilla o template el index.html o el archivo html con el que estemos trabajando en la carpeta "src", lo copia (lo agarra como plantilla o template), y le agrega la importación o la referencia al archivo js que exporta webpack en la carpeta "dist", el cual tiene todas nuestros archivos js vinculados, unificados y centralizados  
    ]

}