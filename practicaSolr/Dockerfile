FROM centos
RUN yum -y update
        ##yum equivale a apt-get, -y para indicarle que si a la pregunta que nos haga
RUN yum -y install java-1.8.0-openjdk.x86_64 && yum -y install wget
WORKDIR /opt
        ##nos lleva a un directorio que le indiquemos(opt)
RUN wget https://downloads.apache.org/lucene/solr/8.9.0/solr-8.9.0.tgz
        ## vamos a la URL y obtenemos lo que nos de esa direccion(en este caso un descargable (solr-8.9.0.tgz) )
RUN tar xzf solr-8.9.0.tgz 
        ##descomprime el archivo tgz (tar es un formato comprimido)
CMD ["/opt/solr-8.9.0/bin/solr","start","-force"]
        ##ejecutame el solr
