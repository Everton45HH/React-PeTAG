from models.user import User
from DAO.userDAO import userDAO

daoService = userDAO()

# id_user = 0
# def id_generator():
#     global id_user
#     id_user += 1
#     return id_user

def create_user(info):
    
    #VERIFICAR A SEU O EMAIL JÀ EXISTE , nao pensei em como fazer isso ainda

    # info é um dicionario

    # info = {
    #     'name': name,
    #     'email': email,
    # }

    response = daoService.addUserDAO(info)

    if response != False:
        return "ADICIONADO COM SUCESSO", None
    else:
        return False, "ERROR"

#NAO MEXI DAQUI PARA BAIXO
def user_list():
    users = daoService.listAllUsersDAO()
    if users:
        return users, None
    else:
        return None, "users not found"

def getUserByid(id):
    user = daoService.getUserByIdDAO(id)
    if user:
        return user, None #Nao sei oque retornar no corpo pensei em retornar 200
    else:
        return None, "user not found"

def update_user(id, new_info):
    pass
    # user_found, erro = chosen_user_list(id)

    # device_parms = ['name', 'email', 'senha']

    # for param in device_parms:
    #     if param not in new_info:
    #         return None, "bad request"
    # if erro:
    #     return None, erro
    # for x in users:
    #     if x.email == new_info['email'] and x.id != id:
    #         return None, "the email already exists"
    # if user_found:
    #     user_found.name = new_info['name'] if 'name' in new_info else user_found.name
    #     user_found.email = new_info['email'] if 'email' in new_info else user_found.email
    #     user_found.senha = new_info['senha'] if 'senha' in new_info else user_found.senha
    #     return user_found, None
    # if not new_info['name'] or new_info['email'] or new_info['senha']:
    #     return None, "bad request"

def delete_user(id):
    global users
    user, erro = chosen_user_list(id)
    if user:
        users.remove(user)
        return True, None
    if erro:
        return False, erro
        