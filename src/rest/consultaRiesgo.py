from flask import Flask 
from flask import request
import json
import time


app = Flask(__name__) 

@app.after_request
def after_request(response):
	response.headers.add('Access-Control-Allow-Origin', '*')
	response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
	response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
	return response

@app.route("/ConsultaRiesgo")
def hello():
	return "ConsultaRiesgo Activo..."

@app.route('/ConsultaRiesgo/ValidacionPermisos',methods=['GET']) 

def validacion_permisos():
	if 'empleado' in request.args:
		empleado = request.args['empleado'].strip().upper()
	else:
		empleado = ""

	empresas_disponibles = [{'empresa':'FISA' }, {'empresa':'FISOFO' }, {'empresa':'FINSOL' }, {'empresa':'CONFIANZAECONOMICA' }]
	return json.dumps(empresas_disponibles)

@app.route('/ConsultaRiesgo/consultaInicial',methods=['GET']) 
def consulta_inicial():
	#datos de entrada
	if 'empresa' in request.args:
		empresa = request.args['empresa'].strip().upper()
	else:
		empresa = ""
	if 'riesgo' in request.args:
		riesgo = request.args['riesgo'].strip().upper()
	else:
		riesgo = ""
	if 'fecha' in request.args:
		fecha = request.args['fecha'].strip().upper()
	else:
		fecha = ""
	if 'nombre' in request.args:
		nombre = request.args['nombre'].strip().upper()
	else:
		nombre = ""
	if 'apellido_pat' in request.args:
		apellido_pat = request.args['apellido_pat'].strip().upper()
	else:
		apellido_pat = ""
	if 'apellido_mat' in request.args:
		apellido_mat = request.args['apellido_mat'].strip().upper()
	else:
		apellido_mat = ""
	
	print 'empresa:' + empresa
	print 'fecha:' + fecha
	print 'riesgo:' + riesgo
	print 'nombre:' + nombre
	print 'apellido_pat:' + apellido_pat
	print 'apellido_mat:' + apellido_mat


	datos={ 'id':'000127172436','nombre':'luis', 'apellidoPaterno':'perez', 'apellidoMaterno':'lopez', 'rfc':'IHGSUB343', 'curp':'NW7G4W08BU', 'nacionalidad':'Mexicana', 'estadoCivil':'soltero', 'fechaNacimiento':'6/6/6', 'pais':'Mexico', 'depEconomicos':'5'}
	domicilio={ 'tipoVivienda':'Departamento', 'calle':'av central', 'entreCalles':'calle 4 y calle 5', 'cp':'80040', 'municipio':'culiacan', 'entidadFederativa':'Sinaloa', 'ciudad':'Culiacan', 'colonia':'Chapultepec'}
	riesgo={ 'riesgo':'Alto', 'producto':'Alto', 'actividad':'contador', 'canColocacion':'Oxxo', 'pep':'PEP', 'estado':'Activo'}

	persona = {'datos':datos, 'domicilio':domicilio, 'riesgo':riesgo}


	data = []

	data.append(persona)
	data.append(persona)
	data.append(persona)
	data.append(persona)
	
	time.sleep(3)

	return json.dumps(data)

if __name__ == '__main__':	
	#si Rest.py
	app.run(host="localhost",debug=True, port=9999, threaded=True)