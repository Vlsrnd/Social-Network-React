import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '67086d1f-4a6b-4aa0-acdc-46ba8a33e5e5',
  },
});

export const usersAPI = {
  getRequestUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
};

export const followAPI = {
  check(userId) {
    return instance
      .get(`follow/${userId}`)
  },
  follow(userId) {
    return instance
      .post(`follow/${userId}`, {})
      .then(response => response.data);
  },
  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then(response => response.data);
  },
};

export const authAPI = {
  amIAuthorized() {
    return instance(`auth/me`)
      .then(response => response.data);
  },
  login(email, password, rememberMe, captcha) {
    return instance
      .post(`auth/login`, {email, password, rememberMe, captcha})
      .then(response => response.data);
  },
  logout() {
    return instance
      .delete(`auth/login`)
      .then(response => response.data);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance
      .get(`profile/${userId}`)
      .then(response => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then(response => response.data)
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance
      .put(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
  },
  saveProfileData(profile) {
    return instance
    .put(`profile/`, profile)
  }
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance
    .get(`security/get-captcha-url`)
    .then(response => response.data);
  }
};