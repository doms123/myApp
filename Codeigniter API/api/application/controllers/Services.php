<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Services extends CI_Controller {
	public function users() {
		$getUsers = $this->model->getUsers();

		$data = array(
			'users' => $getUsers->result()
		);

		generate_json($data);
	}

	public function updateUser() {
		$userId = $this->input->post('userId');
		$name = $this->input->post('name');

		$getUpdateUser = $this->model->getUpdateUser($userId, $name);

		if($getUpdateUser) {
			$data = array(
				'success' => 1,
				'msg' => 'the record has been updated'
			);
		}else {
			$data = array(
				'success' => 0,
				'msg' => 'error updating records'
			);
		}

		generate_json($data);
	}

	public function insertUser() {
		if($this->input->post('name') == null) return false;
		$name = $this->input->post('name');

		$getInsertUser = $this->model->getInsertUser($name);

		if($getInsertUser != 0) {
			$data = array(
				'success' => 1,
				'msg' => 'new record has been added'
			);
		}else {
			$data = array(	
				'success' => 0,
				'msg' => 'error inserting records'
			);
		}

		generate_json($data);
	}

	public function deleteUser() {
		$userId = $this->input->post('userId');

		$getDeleteUser = $this->model->getDeleteUser($userId);

		if($getDeleteUser) {
			$data = array(
				'success' => 1,
				'msg' => 'record has been deleted'
			);
		}else {
			$data = array(
				'success' => 0,
				'msg' => 'error deleting records',
				'id' => $userId
			);
		}

		generate_json($data);
	}
}
