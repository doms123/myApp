<?php 
class Model extends CI_Model {
	public function getUsers() {
		$sql = "SELECT * FROM tbl_users WHERE is_visible = 1 ORDER BY user_id DESC";
		$query = $this->db->query($sql);
		return $query;
	}

	public function getUpdateUser($userId, $name) {
		$sql = "UPDATE tbl_users SET name = ? WHERE user_id = ?";
		$data = array($name, $userId);
		$this->db->query($sql, $data);
		return $this->db->affected_rows();
	}

	public function getInsertUser($name) {
		$sql = "INSERT INTO tbl_users(`name`)VALUES(?)";
		$data = array($name);
		$this->db->query($sql, $data);
		return $this->db->insert_id();
	}

	public function getDeleteUser($userId) {
		$sql = "UPDATE tbl_users SET is_visible = ? WHERE user_id = ?";
		$data = array(0, $userId);
		$this->db->query($sql, $data);
		return $this->db->affected_rows();
	}
}