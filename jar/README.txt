The zipped file contains three jar files and this README file only.
-------------------------------------------------------------------------------------------------------------------
margo-demo-scrubbed.jar: This contains the Java programs that you saw during the demo.

jtds-1.3.1.jar: This is a driver to make connections to the SQL server.

dgcore-postgres-1.0-all.jar: This is the (proprietary) DgCore jar.
-------------------------------------------------------------------------------------------------------------------
The Java programs that I demonstrated use the jTDS driver and the DgCore libraries. 
So when you're testing the programs, you'll need make sure that your program can refer the corresponding jar files.
-------------------------------------------------------------------------------------------------------------------
To embed DgCore in your own wrapper programs/applications, you only need the dgcore-postgres-1.0-all.jar.
