class MMKV {
  private storage: Map<string, string>;

  constructor(_options?: { id: string }) {
    this.storage = new Map();
  }

  getString(key: string): string | undefined {
    return this.storage.get(key);
  }

  set(key: string, value: string | number | boolean): void {
    this.storage.set(key, String(value));
  }

  delete(key: string): void {
    this.storage.delete(key);
  }

  clearAll(): void {
    this.storage.clear();
  }

  getAllKeys(): string[] {
    return Array.from(this.storage.keys());
  }

  getBoolean(key: string): boolean | undefined {
    const val = this.storage.get(key);
    if (val === undefined) return undefined;
    return val === 'true';
  }

  getNumber(key: string): number | undefined {
    const val = this.storage.get(key);
    if (val === undefined) return undefined;
    return Number(val);
  }
}

export const createMMKV = (options?: { id: string }): MMKV => {
  return new MMKV(options);
};

export { MMKV };
