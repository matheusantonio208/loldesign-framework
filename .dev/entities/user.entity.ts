export const entity = {
  firstName: {
    type: 'string',
    required: true,
  },
  lastName: {
    type: 'string',
    required: true,
  },
  email: {
    type: 'string',
    required: true,
    unique: true,
  },
  passwordHash: {
    type: 'string',
    required: true,
  },
  photoProfile: {
    type: 'string',
  },
  dateBirth: {
    type: 'Date',
  },
  phoneNumber: {
    type: 'string',
    required: true,
    unique: true,
  },
  country: {
    type: 'string',
    required: true,
  },
  state: {
    type: 'string',
    required: true,
  },
  group: {
    type: 'string',
    required: true,
    enum: ['admin', 'pro-plan', 'free-plan'],
  },
  dateLastLogin: {
    type: 'string',
  },
  localeLastLogin: {
    type: 'string',
  },
  accountStatus: {
    type: 'string',
    required: true,
    enum: ['active', 'disabled', 'waiting_deleted'],
    default: 'active',
  },
}
