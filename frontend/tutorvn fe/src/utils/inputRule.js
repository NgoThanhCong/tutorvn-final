export const USERNAME_RULE_REQUIRED = {
    required: true,
    message: "Vui lòng nhập tài khoản của bạn!",
}
export const PASSWORD_RULE_REQUIRED = {
    required: true,
    message: "Vui lòng nhập mật khẩu của bạn!",
}

export const OLD_PASSWORD_RULE_REQUIRED = {
    required: true,
    message: "Vui lòng nhập mật khẩu hiện tại của bạn!",
}
export const NEW_PASSWORD_RULE_REQUIRED = {
    required: true,
    message: "Vui lòng nhập mật khẩu mới của bạn!",
}
export const CONFIRM_PASSWORD_RULE_REQUIRED = {
    required: true,
    message: "Vui lòng xác nhận lại mật khẩu mới của bạn!",
}
















export const NAME_RULE_REQUIRED = {
    required: true,
    message: "Vui lòng nhập tên của bạn!",
}

export const EMAIL_LENGTH_RULE_REQUIRED = {
    required: true,
    message: "Vui lòng nhập Email của bạn!",
}

export const EMAIL_FORMAT_RULE_REQUIRED = {
    type: 'email',
    message: "Vui lòng nhập chính xác định dạng Email!",
}

export const PHONE_LENGTH_RULE_REQUIRED = {
    required: true,
    message: "Vui lòng nhập số điện thoại của bạn!",
}

export const PHONE_FORMAT_RULE_REQUIRED = {
    pattern: new RegExp(/^[0-9]+$/),
    message: "Vui lòng nhập dưới dạng số!",
}

export const COUNTRY_RULE_REQUIRED = {
    required: true,
    message: "Vui lòng chọn quốc gia!",
}