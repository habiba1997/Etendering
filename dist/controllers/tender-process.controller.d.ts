import { Filter } from '@loopback/repository';
import { TenderProcess, TenderingProcessEnteredModel, CompanyUser } from '../models';
import { TenderProcessRepository, CompanyUserRepository, HospitalUserRepository } from '../repositories';
export declare class TenderProcessController {
    hospitalUserRepository: HospitalUserRepository;
    companyUserRepository: CompanyUserRepository;
    tenderProcessRepository: TenderProcessRepository;
    tenderId: TenderingProcessEnteredModel;
    constructor(hospitalUserRepository: HospitalUserRepository, companyUserRepository: CompanyUserRepository, tenderProcessRepository: TenderProcessRepository);
    addTenderToCompanyByUserID(direct: boolean, Userid: string, TenderProcessId: string): Promise<void>;
    NormaltenderEntered(user: CompanyUser, TenderProcessId: string): Promise<CompanyUser>;
    SpecifictenderEntered(user: CompanyUser, TenderProcessId: string): Promise<CompanyUser>;
    addTenderToHospitalByUserID(Userid: string, TenderProcessId: string): Promise<void>;
    createTender(tenderProcess: Omit<TenderProcess, '_id'>): Promise<TenderProcess>;
    find(filter?: Filter<TenderProcess>): Promise<TenderProcess[]>;
    findById(id: string): Promise<TenderProcess>;
    updateById(id: string, tenderProcess: TenderProcess): Promise<void>;
    deleteById(id: string): Promise<void>;
}
