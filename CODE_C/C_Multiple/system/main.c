#include <stdio.h>
#include <stdlib.h>
#include <string.h>                     
#include "datatype.h"     
#include "carin.h"   
#include "carout.h"
#include "search.h"
#include "modify.h"
#include "del.h"
#include "jifei.h"
#include "show.h"
#include "open.h"
#include "save.h"
#include "cover.h"
int main() {
	int choice;
	read();
	while(1) {
		cover();
		printf("\t\tplease input your choice:");
		scanf("%d",&choice);
		switch(choice) {
			case 1: add(); save();    break;
			case 2: out(); save();    break;
			case 3: modify();save();	break;
			case 4: del();save();			break;
			case 5: show(); 					break;
			case 6: search();					break;
			case 7: jifei();					break;
			case 0: exit(0);
		}
		system("PAUSE");
	}
	return 0;
}
