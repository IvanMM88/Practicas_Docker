FROM centos
RUN yum -y update
        ##yum equivale a apt-get, -y para indicarle que si a la pregunta que nos haga
RUN yum -y install java-1.8.0-openjdk.x86_64 && yum -y install wget && yum -y install lsof
WORKDIR /opt
        ##nos lleva a un directorio que le indiquemos(opt) en todos los Linux hay un directorio llamado /opt
        ##Se podría haber elegido cualquier otro. Es un ejemplo
RUN wget https://downloads.apache.org/lucene/solr/8.9.0/solr-8.9.0.tgz
        ## vamos a la URL y obtenemos lo que nos de esa direccion(en este caso un descargable (solr-8.9.0.tgz) )
RUN tar xzf solr-8.9.0.tgz 
        ##descomprime el archivo tgz (tar es un formato comprimido)
CMD ["/opt/solr-8.9.0/bin/solr","start","-force", "-f"]
        ##ejecutame el solr (-force es porque solr no quiere arrancarse como usuario root, 
        ##tiene que forzarse con -force, el parametro -f es para que arranque en foreground(en primer plano))
EXPOSE 8983