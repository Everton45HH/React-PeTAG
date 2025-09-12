import sqlite3


class userDAO:

    def __init__(self):
        self.conexao = self.get_connection()

    #CRIA CONEXAO
    def get_connection(self):
        conexao = sqlite3.connect("Database/djangoDatabase.sql")
        return conexao

    #POST
    def addUserDAO(self, user):
        cursor = self.conexao.cursor()
        try:
            query = """
            INSERT INTO Usuario (nome, email, senha, telefone) 
            VALUES (%s, %s, %s, %s)
            """
            cursor.execute(query, (user['nome'], user["email"]))
            self.conexao.commit()            
            
        except Exception as e:
            return False 
    
    # "TESTE"
    
    #GET
    def listAllUsersDAO(self):
        cursor = self.conexao.cursor()
        try:
            query = "SELECT * FROM Usuario"
            cursor.execute(query)
            users = cursor.fetchall()
            return users
        except Exception as e:
            return None
        
    # GET(id)
    def getUserByIdDAO(self,id):
        cursor = self.conexao.cursor()
        try:
            query = "SELECT * FROM Usuario WHERE id = %s",(id,)
            cursor.execute(query, (id,))
            user = cursor.fetchone()
            return user
        except Exception as e:
            return None
        
# TESTE COMMIT ERROR