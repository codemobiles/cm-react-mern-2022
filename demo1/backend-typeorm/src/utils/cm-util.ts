import * as fs from 'fs-extra';
import { AppDataSource } from '../data-source';
import { Counters } from '../entity/Counters';

export function savedValue(value: any, _default: any): any {
  return value ? value : _default;
}

export async function deleteFile(name: string) {
  var path = __dirname + './../../uploaded/images/' + name;
  if (fs.existsSync(path)) {
    await fs.remove(path);
  }
}

export function getFileName(files: any, id: string): string | null {
  if (files.image != null) {
    var fileExtention = files.image.originalFilename.split('.')[1];
    const name = `${id}.${fileExtention}`;
    return name;
  }
  return null;
}

export async function uploadImage(files: any, name: string) {
  if (files.image != null) {
    var oldpath = files.image.filepath;
    var newpath = __dirname + './../../uploaded/images/' + name;

    if (fs.existsSync(newpath)) {
      await fs.remove(newpath);
    }
    await fs.move(oldpath, newpath);
  }
}

export async function generateSeq(id: string): Promise<number> {
  const counterRepo = AppDataSource.getRepository(Counters);
  const { _id, seq } = await counterRepo.findOne({
    where: { id },
  });

  const nextSeq = seq ? seq + 1 : 1;
  await counterRepo.update({ _id }, { seq: nextSeq });
  return nextSeq;
}
