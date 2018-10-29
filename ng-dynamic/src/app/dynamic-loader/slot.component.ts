import { AfterContentInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ProviderService } from '../dynamic-provider/provider.service';

@Component({
  template: '<h5>SLOT</h5><div #host></div>'
})
export class SlotComponent implements AfterContentInit {
  @ViewChild('host', { read: ViewContainerRef }) host: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private providerService: ProviderService
  ) {}

  ngAfterContentInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.providerService.getComponent());

    const viewContainerRef = this.host;
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
