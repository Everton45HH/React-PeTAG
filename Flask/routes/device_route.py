from flask import Blueprint, request, jsonify
from services.device_service import *
from utils.error_messages import ERROR as ERRO
devices_bp = Blueprint('devices', __name__, url_prefix='')
@devices_bp.route('/devices', methods=['POST'])
def create():
    info_body = request.json
    new_device, erro = create_device(info_body)
    if erro:
        erro_info = ERRO.get(erro, {'message': 'Unknown error', 'status_code': 500})
        return jsonify({'message': erro_info['message']}), erro_info['status_code']
    return jsonify(new_device.to_dict()), 201

@devices_bp.route('/devices', methods=['GET'])
def list_devices():
    lista, erro = device_list()
    if erro:
        erro_info = ERRO.get(erro, {'message': 'Unknown error', 'status_code': 500})
        return jsonify({'message': erro_info['message']}), erro_info['status_code']
    return jsonify(lista), 200

@devices_bp.route('/devices/<int:id>', methods=['GET'])
def chosen_device(id):
    device_found, erro  = chosen_device_list(id)
    if erro:
        erro_info = ERRO.get(erro, {'message': 'Unknown error', 'status_code': 500})
        return jsonify({'message': erro_info['message']}), erro_info['status_code']
    return jsonify(device_found.to_dict()), 200

@devices_bp.route('/devices/<int:id>', methods=['PATCH', 'PUT'])
def update(id):
    device, erro = update_device(id, request.json)
    if erro:
        erro_info = ERRO.get(erro, {'message': 'Unknown error', 'status_code': 500})
        return jsonify({'message': erro_info['message']}), erro_info['status_code']
    return jsonify(device.to_dict()), 200

@devices_bp.route('/devices/<int:id>', methods=['DELETE'])
def delete(id):
    result, erro = delete_device(id)
    if erro:
        erro_info = ERRO.get(erro, {'message': 'Unknown error', 'status_code': 500})
        return jsonify({'message': erro_info['message']}), erro_info['status_code']
    if result:
        return "", 204