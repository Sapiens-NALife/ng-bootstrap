import * as i0 from '@angular/core';
import { Type, TemplateRef, ComponentRef, NgZone } from '@angular/core';
import * as i1 from '@ng-bootstrap/ng-bootstrap/accordion';
export * from '@ng-bootstrap/ng-bootstrap/accordion';
import * as i2 from '@ng-bootstrap/ng-bootstrap/alert';
export * from '@ng-bootstrap/ng-bootstrap/alert';
import * as i3 from '@ng-bootstrap/ng-bootstrap/carousel';
export * from '@ng-bootstrap/ng-bootstrap/carousel';
import * as i4 from '@ng-bootstrap/ng-bootstrap/collapse';
export * from '@ng-bootstrap/ng-bootstrap/collapse';
import * as i5 from '@ng-bootstrap/ng-bootstrap/datepicker';
export * from '@ng-bootstrap/ng-bootstrap/datepicker';
import * as i6 from '@ng-bootstrap/ng-bootstrap/dropdown';
export * from '@ng-bootstrap/ng-bootstrap/dropdown';
import * as i7 from '@ng-bootstrap/ng-bootstrap/modal';
export * from '@ng-bootstrap/ng-bootstrap/modal';
import * as i8 from '@ng-bootstrap/ng-bootstrap/nav';
export * from '@ng-bootstrap/ng-bootstrap/nav';
import * as i9 from '@ng-bootstrap/ng-bootstrap/offcanvas';
export * from '@ng-bootstrap/ng-bootstrap/offcanvas';
import * as i10 from '@ng-bootstrap/ng-bootstrap/pagination';
export * from '@ng-bootstrap/ng-bootstrap/pagination';
import * as i11 from '@ng-bootstrap/ng-bootstrap/popover';
export * from '@ng-bootstrap/ng-bootstrap/popover';
import * as i12 from '@ng-bootstrap/ng-bootstrap/progressbar';
export * from '@ng-bootstrap/ng-bootstrap/progressbar';
import * as i13 from '@ng-bootstrap/ng-bootstrap/rating';
export * from '@ng-bootstrap/ng-bootstrap/rating';
import * as i14 from '@ng-bootstrap/ng-bootstrap/scrollspy';
export * from '@ng-bootstrap/ng-bootstrap/scrollspy';
import * as i15 from '@ng-bootstrap/ng-bootstrap/timepicker';
export * from '@ng-bootstrap/ng-bootstrap/timepicker';
import * as i16 from '@ng-bootstrap/ng-bootstrap/toast';
export * from '@ng-bootstrap/ng-bootstrap/toast';
import * as i17 from '@ng-bootstrap/ng-bootstrap/tooltip';
export * from '@ng-bootstrap/ng-bootstrap/tooltip';
import * as i18 from '@ng-bootstrap/ng-bootstrap/typeahead';
export * from '@ng-bootstrap/ng-bootstrap/typeahead';
export { Placement, PlacementArray } from './_ngb-ngbootstrap-utilities.d';
import { Observable } from 'rxjs';
import { Options } from '@popperjs/core';
export { NgbConfig } from '@ng-bootstrap/ng-bootstrap/config';

declare class PopupService<T> {
    private _componentType;
    private _windowRef;
    private _contentRef;
    private _document;
    private _applicationRef;
    private _injector;
    private _viewContainerRef;
    private _ngZone;
    constructor(_componentType: Type<T>);
    open(content?: string | TemplateRef<any>, templateContext?: any, animation?: boolean): {
        windowRef: ComponentRef<T>;
        transition$: Observable<void>;
    };
    close(animation?: boolean): Observable<void>;
    private _getContentRef;
}

declare function listenToTriggers(element: HTMLElement, triggers: string, isOpenedFn: () => boolean, openFn: () => void, closeFn: () => void, openDelayMs?: number, closeDelayMs?: number, enterContent?: Observable<void>, leaveContent?: Observable<void>): () => void;

declare const enum SOURCE {
    ESCAPE = 0,
    CLICK = 1
}
declare function ngbAutoClose(zone: NgZone, document: any, type: boolean | 'inside' | 'outside', close: (source: SOURCE) => void, closed$: Observable<any>, insideElements: HTMLElement[], ignoreElements?: HTMLElement[], insideSelector?: string): void;

type Placement = 'auto' | 'top' | 'bottom' | 'start' | 'left' | 'end' | 'right' | 'top-start' | 'top-left' | 'top-end' | 'top-right' | 'bottom-start' | 'bottom-left' | 'bottom-end' | 'bottom-right' | 'start-top' | 'left-top' | 'start-bottom' | 'left-bottom' | 'end-top' | 'right-top' | 'end-bottom' | 'right-bottom';
type PlacementArray = Placement | Array<Placement> | string;
interface PositioningOptions {
    hostElement: HTMLElement;
    targetElement: HTMLElement;
    placement: string | Placement | PlacementArray;
    baseClass?: string;
    updatePopperOptions?: (options: Partial<Options>) => Partial<Options>;
}
declare function ngbPositioning(): {
    createPopper(positioningOption: PositioningOptions): void;
    update(): void;
    setOptions(positioningOption: PositioningOptions): void;
    destroy(): void;
};

declare function addPopperOffset(offset: number[]): (options: Partial<Options>) => Partial<Options>;

/**
 * Function that enforces browser focus to be trapped inside a DOM element.
 *
 * Works only for clicks inside the element and navigation with 'Tab', ignoring clicks outside of the element
 *
 * @param zone Angular zone
 * @param element The element around which focus will be trapped inside
 * @param stopFocusTrap$ The observable stream. When completed the focus trap will clean up listeners
 * and free internal resources
 * @param refocusOnClick Put the focus back to the last focused element whenever a click occurs on element (default to
 * false)
 */
declare const ngbFocusTrap: (zone: NgZone, element: HTMLElement, stopFocusTrap$: Observable<any>, refocusOnClick?: boolean) => void;

declare const ngbCompleteTransition: (element: HTMLElement) => void;

declare function toInteger(value: any): number;
declare function toString(value: any): string;
declare function isString(value: any): value is string;
declare function isNumber(value: any): value is number;
declare function isInteger(value: any): value is number;
declare function isDefined(value: any): boolean;
declare function isPromise<T>(v: any): v is Promise<T>;

declare class NgbModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgbModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgbModule, never, [typeof i1.NgbAccordionModule, typeof i2.NgbAlertModule, typeof i3.NgbCarouselModule, typeof i4.NgbCollapseModule, typeof i5.NgbDatepickerModule, typeof i6.NgbDropdownModule, typeof i7.NgbModalModule, typeof i8.NgbNavModule, typeof i9.NgbOffcanvasModule, typeof i10.NgbPaginationModule, typeof i11.NgbPopoverModule, typeof i12.NgbProgressbarModule, typeof i13.NgbRatingModule, typeof i14.NgbScrollSpyModule, typeof i15.NgbTimepickerModule, typeof i16.NgbToastModule, typeof i17.NgbTooltipModule, typeof i18.NgbTypeaheadModule], [typeof i1.NgbAccordionModule, typeof i2.NgbAlertModule, typeof i3.NgbCarouselModule, typeof i4.NgbCollapseModule, typeof i5.NgbDatepickerModule, typeof i6.NgbDropdownModule, typeof i7.NgbModalModule, typeof i8.NgbNavModule, typeof i9.NgbOffcanvasModule, typeof i10.NgbPaginationModule, typeof i11.NgbPopoverModule, typeof i12.NgbProgressbarModule, typeof i13.NgbRatingModule, typeof i14.NgbScrollSpyModule, typeof i15.NgbTimepickerModule, typeof i16.NgbToastModule, typeof i17.NgbTooltipModule, typeof i18.NgbTypeaheadModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgbModule>;
}

export { NgbModule, PopupService, addPopperOffset, isDefined, isInteger, isNumber, isPromise, isString, listenToTriggers, ngbAutoClose, ngbCompleteTransition, ngbFocusTrap, ngbPositioning, toInteger, toString };
