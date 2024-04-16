import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { Vacancy } from '../vacancy';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies?: Company[];
  vacancies?: Vacancy[];
  selectedCompany?: Company;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => this.companies = companies);
  }

  onSelect(company: Company): void {
    this.selectedCompany = company;
    this.getVacanciesByCompany(company.id);
  }

  getVacanciesByCompany(id: number): void {
    this.companyService.getVacanciesByCompany(id).subscribe(vacancies => this.vacancies = vacancies);
  }
}
