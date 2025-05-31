import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { MintBadgeDto } from './dto/mint-badge.dto';

@Controller('badges')
export class BadgesController {
  constructor(private readonly badgesService: BadgesService) {}

  @Post()
  create(@Body() createBadgeDto: CreateBadgeDto) {
    return this.badgesService.create(createBadgeDto);
  }

  @Get()
  findAll() {
    return this.badgesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.badgesService.findOne(id);
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: string) {
    return this.badgesService.findByUserId(userId);
  }

  @Post('mint')
  mintNFTBadge(@Body() mintBadgeDto: MintBadgeDto) {
    return this.badgesService.mintNFTBadge(mintBadgeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.badgesService.remove(id);
  }
}