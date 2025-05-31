export interface CardanoWallet {
    address: string;
    stakeAddress?: string;
    balance: number;
    assets?: CardanoAsset[];
  }
  
  export interface CardanoAsset {
    unit: string;
    quantity: string;
    policy_id: string;
    asset_name: string;
  }