import './styles.css';

import { crearTodoHtml } from './js/componentes';
import { Todo, TodoList } from './classes'; // Si no especificamos que archivo debe importar del directorio que le indicamos ("classes" es el directorio que le indicamos en este caso), por defecto, va a buscar o seleccionar el "index.js", es decir, si no especificamos cuál archivo importamos del directorio que le pasamos, entonces va a tomar el archivo "index.js" en caso de estar presente, y va a ignorar el resto de archivos presentes en ese directorio

export const listaDeTareas = new TodoList();
// creo una nueva instancia de mi clase "TodoList", la cual es igual a un arreglo vacío


listaDeTareas.todos.forEach( tarea => crearTodoHtml(tarea) );

// basicamente le estamos diciendo que ejecute un forEach por cada elemento que hay en mi array "this.todos", cuya referencia se está almacenando en la constante "listaDeTareas"
// para cada "todo" o instancia de mi array, se ejecuta lo que está entre paréntesis, que es la función que ejecuta la creación de un "todo" en el HTML
// lo que estamos diciendo en lo que está entre paréntesis es que cada elemento que contenga dentro mi array "this.todos", cuya referencia se almacena en la constante "listaDeTareas", va a ser una "tarea" y vamos a ejecutar la función "crearTodoHtml" para cada "tarea", siendo cada "tarea" un "todo" o instancia de mi clase "Todo" que está dentro de mi arreglo "this.todos", entonces, por cada instancia de mi clase "Todo" que esté dentro del arreglo "this.todos", se va a ejecutar la función "crearTodoHtml" (gracias al ciclo forEach), esta funcion es responsable de crear esa instancia de mi clase "Todo" en el HTML del sitio, tomando las propiedades que tiene dicha instancia para poder hacerlo y conocer su ID, ESTADO, TAREA. El argumento que recibe dicha funcion es un "todo" o una instancia de mi clase "Todo", agarra las propiedades de dicha instancia de mi clase, y en base a eso la crea en el HTML, lo que estoy haciendo ahora es un ciclo forEach, en el cual se recorren todas las instancias de mi clase "Todo" que están dentro de mi arreglo "this.todos", y ejecutar por cada una de esas instancias que contiene el arreglo "this.todos" esa función que las crea en el HTML. De esa manera, cada "todo" o instancia de mi clase "Todo" que se encuentre en mi array y en localStorage, se va a imprimir en el HTML de la web, debido a que si hay un "todo", por cada "todo" que haya en el arreglo, se va a ejecutar la función "crearHtmlTodo" ¿por qué? porque estoy haciendo un ciclo forEach, entonces, gracias al ciclo forEach, voy a recorrer todos los elementos o instancias que tenga mi arreglo y a su vez se esté almacenando en localStorage, entonces, voy a ejecutar esa funcion por cada instancia y el argumento de dicha función va a ser esa misma instancia, obteniendo la impresión de dichas instancias en el HTML porque es lo que hace dicha función..................................................................... De esa manera, el ciclo forEach va a recorrer las instancias presentes en mi array, y por cada instancia, va a ejecutar la funcion crearTodoHtml, siendo la instancia también el argumento para la función... de esa manera, todas las instancias almacenadas en mi array y en localStorage, se van a ver en mi HTML, porque por cada una que esté en mi array, se ejecuta la función (con la instancia como argumento) que las crea en el HTML. El argumento que recibe la función es una "todo" o instancia de mi clase "Todo", toma las propiedades de esa instancia y la crea en el HTML, si yo le paso cada instancia que está en mi arreglo como argumento, y a su vez, se ejecuta dicho ciclo por cada instancia que tengo, obtengo que va a recorrer cada instancia y cuando la recorra, va a ejecutar la función que imprime esa instancia en el HTML, con la instancia misma como argumento, obteniendo la impresión de todas las instancias que tiene el arreglo "this.todos" en el HTML
 





/*

// Práctica creando "todos" de manera manual y estática

const tareaUno = new Todo( 'Lista de tareas de Álvaro' );
// creo las tareas que van a ir en mi arreglo de "TodoList"

listaDeTareas.nuevoTodo( tareaUno );
// Inserto esas tareas creadas a mi arreglo, mediante el método "nuevoTodo()", el cual recibe como argumento una "tarea" o "todo", y el valor que este método recibe como argumento, es el valor que se insertar al arreglo "todos" de la clase "TodoList". Es decir, cada vez que ejecuto el método, se hace un push del argumento que recibe el método, a mi array de "todos" de mi clase "TodoList", por lo cual, cuando ejecuto el método, y le paso como argumento la tarea que cree, esa tarea se inserta (.push) a mi arreglo de "todos" de la clase "TodoList"

crearTodoHtml( tareaUno );
// Función que crea e inserta el elemento <li> y recibe como argumento el "to_do" o "tarea" o la instancia de la clase "Todo" que se creó más arriba y que se utiliza para mostrar la propiedad "tarea" de la clase, el argumento de esta función "crearTodoHtml" es una instancia de la clase "Todo", y al crearse esa nueva instancia, se envía como argumento (al constructor de la clase) el valor para la propiedad "tarea" de la clase "Todo", la función inserta o toma el valor de esa propiedad de la clase "Todo" e inserta ese valor como una "tarea" siguiendo la estructura HTML que tiene cada "to do", cambiando los datos de las propiedades "tarea", "id" y demás, tomando eso de manera dinámica de la creación de cada instancia de la clase "Todo" (siendo la propiedad "tarea" la más importante de la clase, o la que se recibe en el constructor cuando se crea una nueva instancia de la clase, es decir, cuando creo una nueva instancia de mi clase "Todo", le paso un argumento que corresponde a mi propiedad "tarea" y eso es lo que guarda esa nueva instancia, además de otras propiedades, que no se envían como argumentos)

*/