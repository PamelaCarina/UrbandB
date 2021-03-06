import xlrd
import mysql.connector

'''book = xlrd.open_workbook("./database/tablas_excel/categorias.xls")
sheet = book.sheet_by_name("Hoja1")'''

mydb = mysql.connector.connect(host="localhost", user="root", password="30k9aELZ20", database="urbandb", auth_plugin='mysql_native_password')

mycursor= mydb.cursor()

#mycursor.execute("CREATE TABLE Areas_tecnicas(id INT PRIMARY KEY, nombre VARCHAR(50))")
#mycursor.execute("CREATE TABLE Categorias(id INT PRIMARY KEY, nombre VARCHAR(50), id_area INT)")
#mycursor.execute("CREATE TABLE Admins(rut VARCHAR(12) PRIMARY KEY, nombre VARCHAR(50), password VARCHAR(20), tipo_admin BOOLEAN)")
#mycursor.execute("CREATE TABLE Lectores(rut VARCHAR(12) PRIMARY KEY, nombre VARCHAR(50), password VARCHAR(20), tipo_lector BOOLEAN)")
#mycursor.execute("CREATE TABLE Items(id INT PRIMARY KEY, nombre VARCHAR(100), cantidad INT, id_categoria INT, tipo BOOLEAN)")

#mycursor.execute("DROP TABLE users")
#mycursor.execute("ALTER TABLE items ADD id_area INT")

#mycursor.execute("SHOW TABLES")

#for tb in mycursor:
#    print(tb)

'''query = """INSERT INTO categorias (id, nombre, id_area) VALUES (%s, %s, %s)"""

for r in range(1, sheet.nrows):
    id = sheet.cell(r,0).value
    nombre = sheet.cell(r,1).value
    id_area = sheet.cell(r,2).value
    
    values = (id, nombre, id_area)
    mycursor.execute(query, values)

mycursor.close()
mydb.commit()'''
mydb.close() 