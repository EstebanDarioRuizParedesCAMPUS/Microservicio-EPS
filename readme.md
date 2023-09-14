## EndPoints a realizar de dichas consultas:

_1. Obtener todos los pacientes de manera alfabética._

http://localhost:5000/method/organizarNombre

_2. Obtener las citas de una fecha en específico , donde se ordene los pacientes de manera alfabética._

`Aún no arroja un dato` 
http://localhost:5000/method/citas/filtrarNombre/?fecha= **Fecha en formato YYYY-MM-DD**

_3. Obtener todos los médicos de una especialidad en específico (por ejemplo, **‘Cardiología’**)._

http://localhost:5000/method//medicos/filtro/?params= **Especialidad del Medico**

_4. Encontrar la próxima cita para un paciente en específico (por ejemplo, el paciente con_ **user_id 1**_)._



_5. Encontrar todos los pacientes que tienen citas con un médico en específico (por ejemplo, el médico con_ **med_numMatriculaProfesional 1**_)._



_6. Encontrar todas las citas de un día en específico (por ejemplo, **‘2023-07-12’**)._



_7. Obtener todos los médicos con sus consultorios correspondientes._



_8. Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con_ **med_numMatriculaProfesional 1 en ‘2023-07-12’**_)._



_9. Obtener lo/s consultorio/s donde se aplicó las citas de un paciente._



_10. Obtener todas las citas realizadas por los pacientes de acuerdo al género registrado, siempre y cuando el estado de la cita se encuentra registrada como “Atendida”._



_11. Insertar un paciente a la tabla usuario, donde si es menor de edad deberá solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente (El usuario deberá poder ingresar de manera personalizada los datos del usuario a ingresar)._



_12. Mostrar todas las citas que fueron canceladas de un mes en específico. Dicha consulta deberá mostrar la fecha de la cita, el nombre del usuario y el médico designado._


