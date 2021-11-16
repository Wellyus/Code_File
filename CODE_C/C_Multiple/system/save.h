void save() {
	FILE *fp;
	int i;
	if ((fp = fopen("message.txt", "wb")) == NULL) {
		printf("cannot open file!\n");
		exit(1);
	}
	for (i = 0; i < n; i++) {
		if (fwrite(&c[i], sizeof(struct car), 1, fp) != 1) {
			printf("file write error!\n");
		}
	}
	fclose(fp);
}
