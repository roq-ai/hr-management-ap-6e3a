interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: ['Applicant'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee'],
  tenantName: 'Organization',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage user information', 'Manage organization information'],
  ownerAbilities: ['Manage user data', 'Manage organization data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/1a0e9e66-638c-4e34-94e1-219e02360f43',
};
