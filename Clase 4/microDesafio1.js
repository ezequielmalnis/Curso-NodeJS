let perfil='asistente';
if(perfil==' ')
{
    console.log('Debe especificar el perfil de usuario');
}
else if(perfil=='Administrador'||perfil=='administrador'||perfil=='ADMINISTRADOR')
{
    console.log('Usted tiene todos los privilegios de uso del sistema');
}
else if(perfil=='Asistente'||perfil=='asistente'||perfil=='ASISTENTE')
{
    console.log('Usted sólo tiene permisos de registrar, modificar y consultar datos');
}
else
{
    console.log('Debe especificar un perfil válido');
}
