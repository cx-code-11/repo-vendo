import { create } from 'zustand';

export interface ServiceEntry {
  serviceCategory: string;
  customServiceName?: string;
  serviceDescription?: string;
  experience: string;
}

export interface OnboardingData {
  businessName: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  services: ServiceEntry[];
  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  upiId: string;
  gstNumber: string;
  aadharNumber: string;
  panNumber: string;
  idProof: string | null;
  companyLogo: string | null;
  documents: string[];
  signature: string | null;
  agreementAccepted: boolean;
}

interface OnboardingState {
  currentStep: number;
  data: Partial<OnboardingData>;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateData: (data: Partial<OnboardingData>) => void;
  reset: () => void;
}

const initialState: Partial<OnboardingData> = {
  businessName: '',
  contactPerson: '',
  email: '',
  phone: '',
  address: '',
  services: [],
  accountHolderName: '',
  bankName: '',
  accountNumber: '',
  ifscCode: '',
  upiId: '',
  gstNumber: '',
  aadharNumber: '',
  panNumber: '',
  idProof: null,
  companyLogo: null,
  documents: [],
  signature: null,
  agreementAccepted: false,
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  currentStep: 1,
  data: initialState,
  setStep: (step) => set({ currentStep: step }),
  nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 4) })),
  prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),
  updateData: (newData) => set((state) => ({ data: { ...state.data, ...newData } })),
  reset: () => set({ currentStep: 1, data: initialState }),
}));
