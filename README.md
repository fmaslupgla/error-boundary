# react-error-boundary

Proyecto para proponer librería para el manejo de error-boundary

## Instrucciones

Para correr proyecto de manera local: <br/>
1- Clonar con el comando "git clone https://github.com/fmaslupgla/error-boundary.git"<br/>
2- Instalar dependencias con el comando "npm install" en el directorio donde esta clonado el proyecto<br/>
3- Ejecutar comando "npm run start" 

## Consideraciones

Se eligió react-error-boundary por ser un package pequeño y por ser el unico que maneja error-boundary. Brinda herramientas para manejar los errores de manera declarativa y simple evitandonos tener que usar componentes clase. 
Tambien nos permite manejar errores que normalmente no se pueden manejar con error-boundary como por ejemplo:<br/>

1- Errores de event-handlers
<br/>
2- Código asincronico 

página de librería : https://github.com/bvaughn/react-error-boundary

## Funcionalidades e implementación

Sus funcionalidades e implementacion son sencillas de comprender. 
Es un componente que nos provee de un wrapper simple y reutilizable que lo podemos usar para envolver nuestros componentes hijos. Cualquier error en el renderizado del arbol de componentes puede ser manejado facilmente. 

La manera mas simple de usar ```<ErrorBoundary>``` es envolverlo alrededor de un componente que pueda tirar error. Esto va a manejar errores generados por ese componente y sus descendientes. 

```
const Bravo = () => {
  const [counter, setCounter] = useState(0);
  if (counter === 3) throw new Error("Código 43");

  return (
    <div className="bContainer">
      <h1>Bravo</h1>
      <h4> {counter}</h4>

      <Button variant="contained" onClick={() => setCounter(counter + 1)}>
        Click
      </Button>

      <div className="secondContainer">
        <ErrorBoundary fallback={<Fallback />}>
          <Charlie />
        </ErrorBoundary>

        <Delta />
      </div>
    </div>
  );
};

```

En este ejemplo se envuelve al componente ```<Charlie/>``` con ```<ErrorBoundary>```, a la misma vez se le provee a la prop "fallback" un componente fallback UI (un componente de error creado por uno mismo). Si Charlie genera un error va a ser interceptado y nos mostrara el componente UI que le pasamos con algun mensaje de error. 

## API

### ErrorBoundary props
``` FallbackComponent ``` <br/>
Es un componente que se renderiza en el evento de un error, como props se le pasa ```error``` y ``` resetErrorBoundary``` (el cual va a reiniciar el estado de ```<ErrorBoundary>``` cuando sea llamado. Util para un boton de "intentalo de nuevo" que cuando es usado con la prop ```onReset```<br/>

Es requerido si no se proveen las props ```fallback``` o ```fallbackRender``` <br/>

```fallbackRender```<br/>
Es una render-prop que permite declarar un fallback UI dentro de la misma prop (como los inline styles). Es util si se necesita acceder a algo que esta dentro del scope del componente que estamos utilizando. 

Debe ser llamado con un objeto que contenta ```error``` y ```resetErrorBoundary```<br/>

Es requerido si no se proveen las props ```fallbackComponent``` o ```fallback```<br/>

Una prop simple  que se utiliza para un fallback generico. Al no pasar ninguna prop no le podemos dar al usuario alguna accion para hacer con el error, simplemente es para mostrar algun mensaje<br/>

```onError```<br/>
En el caso de que haya un error, es llamado como si fuera un evento (como onClick, onChange, etc). Se le debe proveer de dos arumentos: ```error```, ```info```.<br/>

```onReset```<br/>
Es llamado inmediatamente antes de que ```<ErrorBoundary>``` reinicie su estado interno. Se utiliza para asegurarnos que el re-renderizado de los children  no se realize cuando suceda el mismo error de nuevo.

```resetKeys```<br/>
Es un array de valores y se utiliza cuando tenemos un error en el estado local de un componente.<br/>
Si ```<ErrorBoundary>``` esta en un estado de error entonces verifica los valores y si estos cambian de un render al otro entonces los reiniciara automaticamente.<br/>

```onResetKeysChange```
Es llamado cuando cambian los valores de ```resetKeys```. Se llama con ```prevResetKeys``` y ```resetKeys```.<br/> 

```useErrorHandler(error?:unkown)```<br/>

Hay dos maneras de usar ```useErrorHandler```:<br/>

1-```const handleError= useErrorHandler()```<br/>
2-```useErrorHandler(error)```: es util si estamos manejando el estado del error nosotros mismos o si lo sacamos de otro hook<br/>

por ejemplo:<br/>

```
import { useErrorHandler } from 'react-error-boundary'

function Greeting() {
  const [greeting, setGreeting] = React.useState(null)
  const handleError = useErrorHandler()

  function handleSubmit(event) {
    event.preventDefault()
    const name = event.target.elements.name.value
    fetchGreeting(name).then(
      newGreeting => setGreeting(newGreeting),
      handleError,
    )
  }

  return greeting ? (
    <div>{greeting}</div>
  ) : (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input id="name" />
      <button type="submit">get a greeting</button>
    </form>
  )
}

```

Este hook lo que hara es propagar el error hacia el limite de error mas cercano<br/>

de esta manera se pueden manejar los errores en reuntime o asincronos con el wrapper <ErrorBoundary/>

## Sobre proyecto

El proyecto tiene como dependencias: <br/>
1- react-router-dom<br/>
2- react-error-boundary<br/>
3- material-ui<br/>

Se decidió presentar 3 casos para mostrar el funcionamiento de las herramientas que expone la librería, los cuales pueden ir siendo seleccionados en la Navbar. 

### Caso 1: 

Se muestra un arbol de componentes, cuyas funcionalidades son simplemente aumentar un contador cada vez que  se hace click en el botón.
El componente delta jr se espera que tire un error, por lo tanto se marco en rojo, al hacer click 3 veces va a tirar  un codigo de error ficticio. 

![image](https://user-images.githubusercontent.com/107502991/177190085-59b07254-9054-4545-bcea-7c14a7613677.png)
![image](https://user-images.githubusercontent.com/107502991/177190137-845ad5e0-3a98-4e50-8947-7751e981c945.png)

se puede observar que el  error no se propago al resto del arbol de componentes, sino que quedo encapsulado dentro de sus limites impidiendo que la aplicación se detenga con una pantalla blanca. 

Se aplico el mismo procedimiento en los componentes Charlie y Bravo

![image](https://user-images.githubusercontent.com/107502991/177190597-a520e747-1600-4be3-8f65-b9fd3ba20d7e.png)

### Caso 2:

El funcionamiento es sencillo, al escribir un nombre en el input el texto de abajo nos muestra lo escrito, de esa manera completando un saludo.Pero si se escribe la palabra "bomb" el componente va a fallar exponiendonos un mensaje de error y un boton para reiniciarlo.

![image](https://user-images.githubusercontent.com/107502991/177191596-301c3a13-1bab-4f0b-97b5-bbd7aa1958ab.png)

![image](https://user-images.githubusercontent.com/107502991/177191614-1e6a4be8-e38d-48a5-a56d-a09b3808a3df.png)


En este caso se utiliza una implementacion un poco mas compleja que la anterior, acá la idea es demostrar un manejo mas especifico o "granular" del error.
Se utiliza la prop FallbackComponent que acepta un objeto con los argumentos "error" y "resetErrorBoundary", con ellos se puede mostrar el mensaje del error y reiniciar el estado del mismo permitiendole al usuario volver a intentar la accion con un botón o volviendo escribir sobre el input


### Caso 3:

Una tarjeta que muestra el avatar de Rick Sanchez (sacado de la api de rick & morty).
En este caso se utilizan dos hooks (uno de react y otro de react-errorboundary):<br/>
1- useEffect
<br/>
2- useErrorHandler

useEffect es utilizado para hacer fetch a la api y traernos la informacion del avatar, y useErrorHandler se utiliza para los casos en los que tenemos una funcion asíncrona, se activa cuando dicha funcion tira error activando asi el  componente "ErrorBoundary" y mostrandonos el error producido.

![image](https://user-images.githubusercontent.com/107502991/177192447-2430267f-3091-4b65-8f0c-6fe67f04ecaf.png)

![image](https://user-images.githubusercontent.com/107502991/177192506-0a6358a9-75eb-4931-bfad-0d8e4eaba63f.png)

Para hacer que el componente falle simplemente hay que escribir mal la url  en el codigo y guardarlo.
