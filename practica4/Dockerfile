FROM ubuntu:18.04 
ENV LENGUAJE python 
	        #creamos una variable de entorno
RUN apt-get update && apt-get install -y "$LENGUAJE" 
RUN apt-get install -y wget
RUN mkdir /tmp/ejemplo 
            #crea un directorio en tmp llamado ejemplo
COPY ejemplo.txt /tmp/ejemplo   
            #copia el fichero ejemplo.txt de mi pc en el directorio tmp/emjemplo de la imagen
#CMD ["cat","/tmp/ejemplo.txt"]
CMD ["sleep","60"]