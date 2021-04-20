function eliminar(id) {
	swal({
  title: "¿Deseas eliminar el usuario?",
  text: "La persona se eliminará permanentemente",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((OK) => {
  if (OK) {
  	$.ajax({
  		url:"/eliminar/"+id,
  		success: function(res) {
  			console.log(res);
  		},
  	});
    swal("¡Eliminado!", {
      icon: "success",
    }).then((ok)=>{
    	if(ok){
			location.href="/listar";    	
    	}
    });
  } else {
    swal("Cancelado");
  }
});
}