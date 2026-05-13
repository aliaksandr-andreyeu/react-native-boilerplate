const BootSplash = {
  hide: jest.fn().mockResolvedValue(undefined),
  show: jest.fn().mockResolvedValue(undefined),
  getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
  isVisible: jest.fn().mockResolvedValue(false) // 👈 added
};

export default BootSplash;
